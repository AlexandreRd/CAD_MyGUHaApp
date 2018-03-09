import Controller from '@ember/controller';

export default Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    firebase: Ember.inject.service('firebaseApp'),

    actions: {
        iniciarSesion(){
            let email = this.get('email');
            if (Ember.isBlank( this.get('email') ) ){
                Materialize.toast('Introduce tu correo electrónico', 3000);
				return;
			}
            let password = this.get('password');
            if (Ember.isBlank( this.get('password') ) ){
                Materialize.toast('Introduce tu contraseña', 3000);
				return;
			}

            this.get('session').open('firebase', {
                provider: 'password',
                email: email,
                password: password
            }).then((user)=> {
                let userId;
                let userInst;
                this.get('session').fetch().then(()=>{
                    window.Materialize.toast('Bienvenido', 3000);
                    this.transitionToRoute('Dashboard');
                }).catch(()=>{
                    window.Materialize.toast('Bienvenido', 3000);
                    this.transitionToRoute('Dashboard');
                });
                
            }).catch((error)=> {
                console.log(error);
            });

        }
    }


});
