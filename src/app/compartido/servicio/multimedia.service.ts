import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CancionModel } from 'src/app/core/models/cancion.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  public CancionInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)

  public audio!: HTMLAudioElement

  public tiempoTranscurrido$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public tiempoRestante$: BehaviorSubject<string> = new BehaviorSubject('-00:00')

  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')

  public playerPorcentaje$: BehaviorSubject<number> = new BehaviorSubject(0)

  public volPorcentaje$: BehaviorSubject<number> = new BehaviorSubject(1)

  constructor() {
    this.audio = new Audio()

    this.CancionInfo$.subscribe(responseOk => { 
      if (responseOk) { 
        this.setAudio(responseOk)
      } 
    })

    this.escucharTodosLosEventos();

  }

  public setAudio(cancion: CancionModel) {
    // (this.audio.played) ? this.audio.pause() : this.audio.play()

     console.log("reproduciendo ...=>");
    this.audio.src = cancion.url;
    this.audio.play();

    // this.pauseplay()
  }

  private escucharTodosLosEventos(): void {
    this.audio.addEventListener('timeupdate', this.calculaTiempo, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
    // this.audio.addEventListener('ended', this.setMusic, false)
  }

  public pauseplay(): void {

    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public repPausePlay(): void {
    if (this.audio.paused) {

    } else {

    }
  }

  private calculaTiempo = () => {
    const { duration, currentTime } = this.audio;
    this.setTiempoTranscurrido(currentTime);
    this.setTiempoRestante(currentTime, duration)
    this.setPorcentaje(currentTime, duration);

  }

  private setTiempoTranscurrido(tiempoActual: number): void {
    let segundos = Math.floor(tiempoActual % 60)
    let minutos = Math.floor(tiempoActual / 60) % 60

    const segundosVisualizar = (segundos < 10) ? `0${segundos}` : segundos;
    const minutoVisualizar = (minutos < 10) ? `0${minutos}` : minutos;

    const FormatoVisualizacion = `${minutoVisualizar}:${segundosVisualizar}`

    this.tiempoTranscurrido$.next(FormatoVisualizacion);


  }

  private setTiempoRestante(tiempoActual: number, duracion: number): void {

    let tiempoIzquierdo = duracion - tiempoActual;
    let segundos = Math.floor(tiempoIzquierdo % 60);
    let minutos = Math.floor(tiempoIzquierdo / 60) % 60

    const visualizacionSegundo = (segundos < 10) ? `0${segundos}` : segundos;
    const visualizaMinuto = (minutos < 10) ? `0${minutos}` : minutos;

    const formatoVer = `-${visualizaMinuto}:${visualizacionSegundo}`

    this.tiempoRestante$.next(formatoVer)

  }

  private setPorcentaje(tiempoActual: number, duracion: number): void {
    let porcentaje = (tiempoActual * 100) / duracion;

    this.playerPorcentaje$.next(porcentaje);

  }
 

  private setPlayerStatus = (state: any) => {
    // console.log("stado :: ",state);

    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }

  }

  public seekAudio(porcentaje: number): void {
    if (porcentaje > 100) {
      porcentaje = 100;
    } else if (porcentaje < 0) {
      porcentaje = 1
    }
    const { duration } = this.audio

    const porcentajeASegundos = (porcentaje * duration) / 100;

    this.audio.currentTime = porcentajeASegundos
  }
  
  public seekVolumen(volumen:number):void{ 
      // console.log('llegó tu volumen===>',volumen);
      
    if(volumen<0){
      volumen=0.1
    } else if(volumen>1){
      volumen=1.0
    }
    // console.log('intentando cambiar volumen',volumen);
      
      this.audio.volume=volumen
      this.volPorcentaje$.next(volumen)
  }
 

}
