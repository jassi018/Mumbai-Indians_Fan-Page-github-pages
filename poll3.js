// For the third poll card
document.querySelectorAll('.poll-card:nth-of-type(3) input[type="radio"]').forEach(option => {
    option.addEventListener('click', e => {
        e.preventDefault();
        const optionId = e.target.id;
        const pollCard = e.target.closest('.poll-card');

        const votingData = {
            'option-1': 1,
            'option-2': 2,
            'option-3': 1,
            'option-4': 3
        };

        const getTotalVotes = () => {
            let totalVotes = 0;
            for (let i = 1; i <= 4; i++) {
                totalVotes += votingData[`option-${i}`];
            }
            return totalVotes;
        };

        const displayResult = () => {
            let total = 0;
            let widths = [];
            pollCard.querySelectorAll('input[type="radio"]').forEach(option => {
                const ID = option.id;
                pollCard.querySelector(`#${ID} ~ .analytic .percent`).textContent = Math.floor(votingData[ID] / getTotalVotes() * 100) + '%';
                pollCard.querySelector(`#${ID} ~ .analytic .bar`).style.width = Math.floor(votingData[ID] / getTotalVotes() * 100) + '%';
                total += Math.floor(votingData[ID] / getTotalVotes() * 100);
                widths.push(Math.floor(votingData[ID] / getTotalVotes() * 100));
            });
            pollCard.querySelectorAll('input[type="radio"]').forEach(option => {
                if (total < 100) {
                    let min = Math.min(widths[0], widths[1], widths[2], widths[3]);
                    min += (100 - total);
                }
                option.parentNode.parentNode.querySelector('.analytic').style.display = 'block';
            });
        };

        votingData[optionId] += 1;

        const analytic = e.target.parentNode.parentNode.querySelector('.analytic');
        const bar = analytic.querySelector('.bar');
        bar.style.backgroundColor = 'rgb(48, 140, 233)';
        const percent = analytic.querySelector('.percent');
        e.target.parentNode.parentNode.querySelector('.tick').style.display = 'inline';
        displayResult();
        option.disabled = true;
    });
});