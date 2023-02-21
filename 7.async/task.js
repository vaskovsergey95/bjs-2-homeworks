class AlarmClock {
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = [];
        this.intervalId = null;
    }


    addClock(time, canCall, callback) {
        if (time === undefined || canCall === undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        for (let elem in this.alarmCollection) {
            if (time === this.alarmCollection[elem].time) {
                console.warn('Уже присутствует звонок на это же время')
            }
        }
        canCall = true;
        return this.alarmCollection.push({canCall, time, callback})
    }


    removeClock(time) {
        return this.alarmCollection.filter(item => item.time !== time);
    }


    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start(callback) {
        if (!this.intervalId) {
            return;
        }

        setTimeout(() => {
            this.alarmCollection.forEach((elem) => {
                if (elem.time === this.getCurrentFormattedTime) {
                    this.canCall = false;
                    callback();
                }
                this.intervalId = callback();
            });
        }, 1000)
    }

    stop() {
        clearInterval();
        this.intervalId = null;

    }

    resetAllCalls() {
        this.alarmCollection.forEach((elem) => {
            this.alarmCollection[elem].canCall = true;
        })

    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }

}


