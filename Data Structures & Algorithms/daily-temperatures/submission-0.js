class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let len = temperatures.length
    
        return temperatures.map ((temp, index) => {
            if (index === len -1) return 0;

            for (let i =index+1; i<len; i++) {
                if(temp < temperatures[i]) return i-index;
            }
            return 0;
        })
    }
}
