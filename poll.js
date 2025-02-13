document.querySelectorAll('.poll-card').forEach(pollCard => {
    const options = pollCard.querySelectorAll('input[type="radio"]');
    const analytics = pollCard.querySelectorAll('.analytic');

    const votingData = {
        'option-1': 1,
        'option-2': 2,
        'option-3': 1,
        'option-4': 3
    };

    const updateResults = () => {
        const totalVotes = getTotalVotes();
        options.forEach(option => {
            const optionId = option.id;
            const percentage = Math.round((votingData[optionId] / totalVotes) * 100);
            const analytic = option.nextElementSibling.querySelector('.analytic');
            analytic.querySelector('.percent').textContent = percentage + '%';
            analytic.querySelector('.bar').style.width = percentage + '%';
        });
    };

    const getTotalVotes = () => {
        let totalVotes = 0;
        for (let key in votingData) {
            totalVotes += votingData[key];
        }
        return totalVotes;
    };

    const disableOptions = () => {
        options.forEach(option => {
            option.disabled = true;
        });
    };

    options.forEach(option => {
        option.addEventListener('click', () => {
            const optionId = option.id;
            votingData[optionId] += 1;
            updateResults();
            disableOptions();
        });
    });
});
