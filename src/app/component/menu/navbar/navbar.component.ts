import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isloggedIn: boolean = true;

  constructor(private router: Router, private globalService: GlobalService) {
  }
  logout() {
    Swal.fire({
      // title: 'Are you sure?',
      text: "Adakah anda pasti ingin log keluar?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'Grey',
      cancelButtonText: 'Tidak',
      confirmButtonText: 'Pasti'
    }).then((result) => {
      if (result.isConfirmed) {
        this.globalService.clear();
        this.router.navigate(['/initial/login']).then(() => {
          window.location.reload();
        });
      }
    })
  }

  home(){
    this.router.navigate(['/erp/home']).then(() => {window.location.reload();
  });
  }

}
