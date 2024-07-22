import { HttpClient } from '@angular/common/http';
import * as QRCode from 'qrcode-generator';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private httpclient: HttpClient) { }

  removeCommas(value: string): number {
    return +value.replace(/,/g, ''); // Remove commas and convert to number
  }

  //is logged in
  isloggedin() {
    return localStorage.getItem('email') != null;
  }

  isloggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getPremiseId() {
    return localStorage.getItem('premise_id')
  }

  getUserPremiseId() {
    return localStorage.getItem('user_premise_id')
  }

  getEmail() {
    return localStorage.getItem('email')
  }

  getName(){
    return localStorage.getItem('name')
  }

  getPremiseName() {
    return localStorage.getItem('premise_name');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUserId() {
    return localStorage.getItem('userId')
  }

  getActivityStatus(){
    return localStorage.getItem('activityStatus')
  }

  storeToken(tokenValue: string) {
    return localStorage.setItem('token', tokenValue)
  }

  clear() {
    localStorage.clear();
  }

  showAlert(title: string, text: string, icon: 'error' | 'success' | 'warning' | 'info' | 'question' = 'info') {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok',
    });
  }

  showAlertReload(title: string, text: string, icon: 'error' | 'success' | 'warning' | 'info' | 'question' = 'info') {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok',
    }).then((result) => { 
      location.reload(); 
    })
  }

  // sendEmail(emailData: any) {
  //   return this.httpclient.post(environment.urlErpOnline + 'Email/sendemail', emailData);
  // }

  generateQRCode(text: string, typeNumber: any, errorCorrectionLevel: any): string {
    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(text);
    qr.make();
    return qr.createDataURL();
  }
  
  generateQrBorang1(letterOfConsentNo: string, buyerid: string) 
  {
    {
      // 'https://lgm20.lgm.gov.my/erp2023/erp/receipt/'+this.receiptNumber
      // const text = 'https://lgm20.lgm.gov.my/erp2023/erp/receipt/' + this.receiptNumber;
      const text = JSON.stringify({ letterOfConsentNo: letterOfConsentNo, buyerid: buyerid });
      // const text = 'https://lgm20.lgm.gov.my/erp2023/erp/receipt/' + this.receiptNumber;
      const typeNumber = 4;
      const errorCorrectionLevel = 'M'; // 'L', 'M', 'Q', 'H'

      // this.qrCodeDataUrl = this.globalService.generateQRCode(text, typeNumber, errorCorrectionLevel);
      return this.generateQRCode(text, typeNumber, errorCorrectionLevel);
    }
  }
}
