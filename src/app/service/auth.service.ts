import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;


  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }

  signup(email: string, password:string){
    this.firebaseAuth
      .createUserWithEmailAndPassword(email,password)
      .then(value =>{
        console.log("Registration Success! ", value);
      })
      .catch(err=>{
        console.log("error: ", err.message);

      });
  }

  logout(){
    return this.firebaseAuth.signOut().then(()=>{
      window.alert("Logged out... !");
    })
  };
  login(email:string,password:string){
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then((value)=>{
      console.log("logged in", value);
    }).catch(error=>{
      console.log("error: ", error.message);
      
    })

  }
}
