import {Page, Alert, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

	todos = [
		{name: 'Todo 1', complete: true},
		{name: 'Todo 2', complete: false},
		{name: 'Todo 3', complete: true}
	];

	constructor(public nav: NavController){}
	
	createTodo(){

		let createTodo = Alert.create({
	      title: 'Create New Todo',
	      inputs: [
	        {
	          name: 'title',
	          placeholder: 'Title'
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancel',
	          handler: data => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: 'Save',
	          handler: data => {
	          	console.log(data);
	          	

	            console.log(newItem);
	          }
	        }
	      ]
	    });
		this.nav.present(createTodo);
	}

	deleteTodo(){
		let deleteItem = Alert.create({
	      title: 'Delete Todo',
	      message: 'Do you really want to delete this todo',
	      buttons: [
	        {
	          text: 'Cancel',
	          handler: () => {
	            console.log('cancel clicked');
	          }
	        },
	        {
	          text: 'Yes',
	          handler: () => {
	            console.log('yes clicked');
	          }
	        }
	      ]
	    });

	    this.nav.present(deleteItem);
	}

	editTodo(item){
		let editTodo = Alert.create({
	      title: 'Edit Todo',
	      inputs: [
	        {
	          name: 'title',
	          placeholder: 'Title',
	          value: item
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancel',
	          handler: data => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: 'Save',
	          handler: data => {
	          	console.log(data);

	            console.log('Saved clicked');
	          }
	        }
	      ]
	    });
		this.nav.present(editTodo);
	}

	addItemInList(item){
		let newItem = '<ion-item>'+
			           item.title +
			        '</ion-item>'+
			        '<ion-item-options>'+
			          '<button danger (click)="deleteTodo('+ item.title +')"><ion-icon name="trash"></ion-icon> Delete</button>'+
			          '<button primary (click)="editTodo('+ item.title +')"><ion-icon name="create"></ion-icon> Edit</button>'+
			        '</ion-item-options>';

			        
	}
}
