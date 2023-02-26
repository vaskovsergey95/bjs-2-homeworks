class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.includes((alarmSignal) => alarmSignal.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        } else {
            this.alarmCollection.push({callback, time, canCall: true})
        }
    }


    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        if (this.intervalId != null) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(check => {
                if (check.time === this.getCurrentFormattedTime()) {
                    check.canCall = false;
                    check.callback();
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => element.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}



