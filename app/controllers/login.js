import Controller from '@ember/controller';
import {isBlank} from '@ember/utils';

export default Controller.extend({
    session: Ember.inject.service(),
    firebase: Ember.inject.service('firebaseApp'),

    actions: {
        iniciarSesion(){
            let email = this.get('email');
            if (isBlank( this.get('email') ) ){
                //Materialize.toast('Introduce tu correo electrónico', 3000);
				return;
			}
            let password = this.get('password');
            if (isBlank( this.get('password') ) ){
                //Materialize.toast('Introduce tu contraseña', 3000);
				return;
			}

            this.get('session').open('firebase', {
                provider: 'password',
                email: email,
                password: password
            }).then(()=> {
                this.get('session').fetch().then(()=>{
                    //window.Materialize.toast('Bienvenido', 3000);
                    this.transitionToRoute('Dashboard');
                }).catch(()=>{
                    //window.Materialize.toast('Bienvenido', 3000);
                    this.transitionToRoute('Dashboard');
                });
                
            }).catch((error)=> {
                console.log(error);
            });

        }
    }


});
