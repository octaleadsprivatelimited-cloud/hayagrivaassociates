const baseKeywords = [
  'Hayagriva Associates',
  'land surveyors in Mancherial',
  'Telangana land survey company',
  'professional land surveying services',
  'DGPS survey specialists',
  'plot demarcation and boundary surveys',
  'topographic and construction surveys',
  'licensed surveyors Telangana'
];

export const createKeywords = (...additional) => {
  const flatList = additional.flat().filter(Boolean);
  return [...new Set([...baseKeywords, ...flatList])].join(', ');
};

export const defaultLocation = 'Mancherial, Telangana';


