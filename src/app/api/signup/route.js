import bcrypt from 'bcrypt';
import dbConnect from '../../../connectToMongo/db';
import User from '../../../models/User';
import { NextResponse } from 'next/server';

export async function POST(request) {

   
  await dbConnect();

  try {
    const { username, password, email } = await request.json();
    const checkUser = await User.findOne({email})
 
    if(checkUser){
      return NextResponse.json({
        message: "User exists"
      }, {
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    user.save()
    return NextResponse.json({
      message: "Account created successfully"
    }, {
      status: 201,
    })
  
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error"
    }, {
      status: 500,
    })
  }
}
