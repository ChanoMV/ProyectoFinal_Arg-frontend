import { Component } from '@angular/core';
import { LogoApComponent } from '../logo-ap/logo-ap.component';
import { SocialComponent } from '../social/social.component';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isLogged = false;
constructor(private router:Router, private tokenService: TokenService){}

ngOnInit():void{
   if(this.tokenService.getToken()){
    this.isLogged =true;
   }else{
    this.isLogged = false;
   }
}

onlogOut(): void{
  this.tokenService.logOut();
  window.location.reload();
}

login(){
 this.router.navigate(['/login'])
}
}
