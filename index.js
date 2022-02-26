class UI {
    constructor() {
        this.billAmount = document.getElementById('amount').value;
        this.serviceQuality = document.getElementById('serviceQuality').value;
        this.noOfPeople = document.getElementById('peopleamt').value;
        this.warning = document.querySelector('.warning');
        this.each = document.querySelector('.each');
    }

    calculateAmount() {
        if (this.billAmount === '' || this.serviceQuality === 0) {
            this.warning.textContent = `Please, enter the correct value`;
            const self = this;
            setTimeout(()=> {
                self.warning.textContent = '';
            }, 3000);
        } else {
            calculatingAmount();
        }
    }

    calculateAmount() {
        //if no of people arent mentioned we assume only one person is payin the tip
        if (this.noOfPeople === 0 || this.noOfPeople === '') {
            this.noOfPeople = 1;
            this.each.textContent = `$${(this.billAmount * this.serviceQuality) / this.noOfPeople} each`;
        }
        else {
            //other wise we will take the value the user has put in the no of people field
            this.each.textContent = `$${(this.billAmount * this.serviceQuality) / this.noOfPeople} each`;
        }
    }
}



const  eventListenters = ()=> {
    document.querySelector('.calc-btn').addEventListener('click', ()=> {
        const ui = new UI();
        ui.calculateAmount()
    })
}

// run the event listener funtion when DOM is fully Loaded
document.addEventListener('DOMContentLoaded', ()=> {
    eventListenters();
})