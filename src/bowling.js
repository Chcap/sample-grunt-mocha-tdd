const STRIKE = 'X'
const SPARE = '/'
const MISS = '-'

function bowling(frames) {
    let score = 0;

    function val(launch, prev) {
        if (!launch || launch === MISS) return 0
        if (launch === STRIKE) return 10
        if (launch === SPARE) return 10 - val(prev)
        return parseInt(launch, 10)
    }

    function getLaunches(index, nbMax = 3) {
        if (nbMax <= 0) {
            return []
        }

        let [first, second] = frames[index].split('')

        if (first === STRIKE) {
            return [first, ...getLaunches(index + 1, nbMax - 1)]
        }

        if (second === SPARE) {
            return [first, second, ...getLaunches(index + 1, nbMax - 2)]
        }

        return [first, second]
    }

    function addFrameToScore(index) {
        const [first, second, third] = getLaunches(index)

        score += val(first)
        score += val(second, first)
        score += val(third, second)
    }

    for (let index = 0; index < 10; index++) {
        addFrameToScore(index)
    }
    return score;
}

module.exports = bowling;
