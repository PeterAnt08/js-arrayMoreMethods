function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(({ sport, athletes, medals }) => ({
    sport,
    athletes,
    medals,
    percentOfSuccess: athletes === 0 ? '0%' : ((medals / athletes) * 100).toFixed(1) + '%'
  }));
}

module.exports = addSuccessPercent;
