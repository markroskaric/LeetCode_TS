class RecentCounter {
    private requests: number[];


    public constructor() {
        this.requests = [];

    }
    ping(t: number): number {

        this.requests.push(t);
        while (this.requests.length > 0 && this.requests[0] < t - 3000) {
            this.requests.pop()
        }
        return this.requests.length


    }


}
