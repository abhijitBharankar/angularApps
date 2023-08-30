import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface NumberObject {
  [key: number]: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {

  @ViewChild('logs') logsElement!: ElementRef


  depositForm!: FormGroup;
  withdrawForm!: FormGroup;
  amount!: number;

  totalAmount: any;

  availableDenomination: NumberObject = {
    2000: 0,
    500: 0,
    200: 0,
    100: 0,
  }

  constructor(private fb: FormBuilder, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.totalAmount = 0;
    this.depositFormControl();
    this.withdrawFormControl();
  }

  depositFormControl() {
    this.depositForm = this.fb.group({
      2000: [0],
      500: [0],
      200: [0],
      100: [0]
    })
  }

  withdrawFormControl() {
    this.withdrawForm = this.fb.group({
      amount: [0]
    })
  }

  deposit() {
    let Invalid = false;
    let depositAmount = 0;
    for (const denomination in this.availableDenomination) {
      // console.log(this.availableDenomination);
      if (this.depositForm.value[denomination] >= 0) {
        this.availableDenomination[denomination] += this.depositForm.value[denomination];
        console.log('denomination', denomination);
        console.log('this.availableDenomination[denomination]', this.availableDenomination[denomination]);


        this.totalAmount += Number(denomination) * this.depositForm.value[denomination]

        depositAmount += Number(denomination) * this.depositForm.value[denomination]

      } else {
        Invalid = true;
      }
    }
    if(Invalid){
      this.createLog('danger', depositAmount)
      this.depositForm.reset({ 2000: 0, 500: 0, 200: 0, 100: 0 });
      Invalid = false;
    }else{
      this.createLog('primary', depositAmount)
      this.depositForm.reset({ 2000: 0, 500: 0, 200: 0, 100: 0 });
      Invalid = false;
    }

  }

  withdraw() {

    if (this.totalAmount > this.withdrawForm.value.amount) {
      if (this.withdrawForm.value.amount % 100 == 0 && this.withdrawForm.value.amount >= 100) {
        const availableDenominations: number[] = [2000, 500, 200, 100];
        let remainingAmount = this.withdrawForm.value.amount;
        const withdrawalDetails: NumberObject = {}
        for (const denomination of availableDenominations) {
          const notesNeeded = Math.min(
            Math.floor(remainingAmount / Number(denomination))
          );

          if (notesNeeded > 0) {
            withdrawalDetails[denomination] = notesNeeded
            remainingAmount -= notesNeeded * Number(denomination);
          }

          if (remainingAmount === 0) {
            console.log('successful withdraw')
          }

        }
        console.log('withdrawalDetails', withdrawalDetails);
        console.log('remainingAmount', remainingAmount);

        for (const notes in withdrawalDetails) {
          this.availableDenomination[notes] -= withdrawalDetails[notes];
        }
        //   //total amount
        this.totalAmount -= this.withdrawForm.value.amount;
        this.createLog('success', this.withdrawForm.value.amount);
        this.withdrawForm.reset({ amount: 0 });
      } else {
        this.createLog('danger', this.withdrawForm.value.amount);
      }
    } else {
      this.createLog('danger', this.withdrawForm.value.amount);
    }


  }



  createLog(key: string, amount: number) {
    const currentDate = new Date();
    const alertDiv = this.logsElement.nativeElement;

    const newDiv = this.renderer.createElement('div');

    this.renderer.addClass(newDiv, 'alert');
    this.renderer.addClass(newDiv, 'alert-' + key);
    this.renderer.setAttribute(newDiv, 'role', 'alert');

    this.renderer.insertBefore(alertDiv, newDiv, alertDiv.firstChild);


    if (key == 'success') {
      this.renderer.appendChild(newDiv, this.renderer.createText('₹' + amount + ' Withdrawal Successful'));
      this.renderer.appendChild(newDiv, this.renderer.createElement('br'));
      this.renderer.appendChild(newDiv, this.renderer.createText('' + currentDate));
    } else if (key == 'danger') {
      this.renderer.appendChild(newDiv, this.renderer.createText('Invalid Amount. Withdraw Unsuccessful'));
      this.renderer.appendChild(newDiv, this.renderer.createElement('br'));
      this.renderer.appendChild(newDiv, this.renderer.createText('' + currentDate));
    } else {
      this.renderer.appendChild(newDiv, this.renderer.createText('₹' + amount + ' Deposit Successful'));
      this.renderer.appendChild(newDiv, this.renderer.createElement('br'));
      this.renderer.appendChild(newDiv, this.renderer.createText('' + currentDate));
    }
  }
}
