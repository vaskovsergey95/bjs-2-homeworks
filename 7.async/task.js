class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }


    addClock(time, callback, id) {
        if (time === undefined || id === undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        for (let elem in this.alarmCollection) {
            if (time === this.alarmCollection[elem].time) {
                console.warn('Уже присутствует звонок на это же время')
                return;
            }
        }
      let canCall = true;
        let alarm = {canCall, time, callback}
        return this.alarmCollection.push(alarm);
    }


    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
        return this.alarmCollection;
    }


    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(elem => this.alarmCollection.canCall = true)


    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}



function test(){
    let alarm = new AlarmClock();
    alarm.addClock("00:20", () => console.log("Будильник 1"), 1);
    alarm.addClock("00:20", () => console.log("Будильник 2"), 2);
    alarm.addClock("00:21", () => console.log("Будильник 3"),3);
    alarm.resetAllCalls();
    alarm.start();
}

test();
