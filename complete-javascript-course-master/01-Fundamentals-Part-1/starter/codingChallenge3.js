const dolphinScore = 97 + 112 + 101;
const koalasScore = 1099 + 95 + 106;

const avgDolphinScore = dolphinScore / 3.0;
const avgKoalasScore = koalasScore / 3.0;

if (avgDolphinScore === avgKoalasScore && (avgDolphinScore >= 100 || avgKoalasScore >= 100)) {
    console.log(`There is a draw between the teams with dolphin's average score: ${avgDolphinScore} and koala's average score: ${avgKoalasScore}`);
}
else if ((avgDolphinScore > avgKoalasScore) && (avgDolphinScore >= 100)) {
    console.log(`Dolphins are the winner 🏆 with the score: ${avgDolphinScore}`);
}
else if ((avgDolphinScore < avgKoalasScore) && (avgKoalasScore >= 100)) {
    console.log(`Koalas are the winner 🏆 with the score: ${avgKoalasScore}`);
}
else {
    console.log(`no team won as they failed to score above 100`);
}
