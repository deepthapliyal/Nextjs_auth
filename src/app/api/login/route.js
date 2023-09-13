import bcrypt from 'bcrypt';
import dbConnect from '../../../connectToMongo/db';
import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import { NextResponse } from 'next/server';

export async function POST(request) {


  await dbConnect();

  try {

    const { email, password } = await request.json();
    console.log(email, password)
    if (!email && password) {
      return NextResponse.json("please provide credentials");
    }

    const user = await User.findOne({ email });
    if (!user) {

      return NextResponse.json({
        message: "User not found"
      }, {
        status: 404,
      });
    }


    const userPassword = await bcrypt.compare(password, user.password);


    if (!userPassword) {

      return NextResponse.json({
        message: "Invalid credentials"
      }, {
        status: 401,
      });
    }
    

    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
  
    return NextResponse.json({ token }, {status: 200})


  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error"
    }, {
      status: 500,
    })
  }
}
