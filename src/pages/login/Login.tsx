import { IonApp,  IonLabel, IonRow, IonGrid, IonCol, IonItem, IonButton, IonInput, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Login: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    return (
        <IonPage>
            <IonGrid>
                <IonRow className="ion-justify-content-center">
                    <IonCol className="ion-align-self-center ion-padding" size-md="4" size-lg="3" size-xs="12">
                        <div className="text-center">
                            <h4>Login Form</h4>
                        </div>
                        <div >
                            <IonItem>
                                <IonLabel position="floating"> Usuario</IonLabel>
                                <IonInput type="text" ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="floating">Senha</IonLabel>
                                <IonInput type="password" ></IonInput>
                            </IonItem>
                        </div>
                        <div className="ion-text-right ion-margin-top">
                            <a>Esqueceu a senha ?</a>
                        </div>
                        <div>
                            <IonButton expand="block"><FontAwesomeIcon icon={faSignInAlt} className="btn-margin-right"/> Login</IonButton>
                        </div>
                        <div className="ion-text-center">
                        ou entre com
                        </div>
                        <div>
                            <IonButton expand="block"><FontAwesomeIcon icon={faSignInAlt} className="btn-margin-right"/> facebook</IonButton>
                            <IonButton expand="block"><FontAwesomeIcon icon={faSignInAlt} className="btn-margin-right"/> Goole</IonButton>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonPage>
    );
}
export default Login;

