import { IonSlides, IonRow, IonContent, IonGrid, IonCol, IonApp, IonSlide, IonButton, IonImg } from '@ionic/react';
import React from 'react';

import './Tutorial.css';

const slideOpts = {
    initialSlide: 0,
    speed: 400
};

const Tutorial: React.FC = () => {
    return (
        <IonApp>
            <IonContent>
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide>
                        <IonGrid>
                            <IonRow>
                                <IonCol><IonImg src="https://ionicframework.com/docs/demos/api/slides/slide-1.png"></IonImg></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <p>
                                        orem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                            </p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>
                    <IonSlide>
                        <IonGrid>
                            <IonRow>
                                <IonCol><IonImg src="https://ionicframework.com/docs/demos/api/slides/slide-1.png"></IonImg></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <p>
                                        orem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod t enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                </p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>
                    <IonSlide>
                        <IonGrid>
                            <IonRow>
                                <IonCol><IonImg src="https://ionicframework.com/docs/demos/api/slides/slide-1.png"></IonImg></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <p>
                                        orem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut
                                    </p>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonButton href="/login/" className="primary">Continuar</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonApp>
    );
};

export default Tutorial;
