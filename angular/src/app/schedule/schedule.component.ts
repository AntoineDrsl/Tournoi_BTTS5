import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  displaySignups = false;
  displayScreeningPhase = false;
  displayQualifiers = false;
  displayGroupStage = false;
  displayRound32 = false;
  displayRound16 = false;
  displayQuarters = false;
  displaySemi = false;
  displayWinnerFinals = false;
  displayGrandFinals = false;

  isDisplayedSignups = false;
  isDisplayedScreeningPhase = false;
  isDisplayedQualifiers = false;
  isDisplayedGroupStage = false;
  isDisplayedRound32 = false;
  isDisplayedRound16 = false;
  isDisplayedQuarters = false;
  isDisplayedSemi = false;
  isDisplayedWinnerFinals = false;
  isDisplayedGrandFinals = false;
  

  constructor() { }

  ngOnInit() {
  }

  signups(){
    if(this.isDisplayedSignups === false) {
      this.displaySignups = true;
      this.isDisplayedSignups = true;
    } else {
      this.displaySignups = false;
      this.isDisplayedSignups = false;
    }
  }

  screeningPhase(){
    if(this.isDisplayedScreeningPhase === false) {
      this.displayScreeningPhase = true;
      this.isDisplayedScreeningPhase = true;
    } else {
      this.displayScreeningPhase = false;
      this.isDisplayedScreeningPhase = false;
    }
  }
  
  qualifiers(){
    if(this.isDisplayedQualifiers === false) {
      this.displayQualifiers = true;
      this.isDisplayedQualifiers = true;
    } else {
      this.displayQualifiers = false;
      this.isDisplayedQualifiers = false;
    }
  }

  groupStage(){
    if(this.isDisplayedGroupStage === false) {
      this.displayGroupStage = true;
      this.isDisplayedGroupStage = true;
    } else {
      this.displayGroupStage = false;
      this.isDisplayedGroupStage = false;
    }
  }

  round32(){
    if(this.isDisplayedRound32 === false) {
      this.displayRound32 = true;
      this.isDisplayedRound32 = true;
    } else {
      this.displayRound32 = false;
      this.isDisplayedRound32 = false;
    }
  }
  
  round16(){
    if(this.isDisplayedRound16 === false) {
      this.displayRound16 = true;
      this.isDisplayedRound16 = true;
    } else {
      this.displayRound16 = false;
      this.isDisplayedRound16 = false;
    }
  }

  quarters(){
    if(this.isDisplayedQuarters === false) {
      this.displayQuarters = true;
      this.isDisplayedQuarters = true;
    } else {
      this.displayQuarters = false;
      this.isDisplayedQuarters = false;
    }
  }

  semi(){
    if(this.isDisplayedSemi === false) {
      this.displaySemi = true;
      this.isDisplayedSemi = true;
    } else {
      this.displaySemi= false;
      this.isDisplayedSemi = false;
    }
  }

  winnerFinals(){
    if(this.isDisplayedWinnerFinals === false) {
      this.displayWinnerFinals = true;
      this.isDisplayedWinnerFinals = true;
    } else {
      this.displayWinnerFinals= false;
      this.isDisplayedWinnerFinals = false;
    }
  }

  grandFinals(){
    if(this.isDisplayedGrandFinals === false) {
      this.displayGrandFinals = true;
      this.isDisplayedGrandFinals = true;
    } else {
      this.displayGrandFinals= false;
      this.isDisplayedGrandFinals = false;
    }
  }





}
