
export interface Verb {
  name: string;
  correctForm: 'ing' | 'to';
}

export const VERBS: Verb[] = [
  // -ing verbs
  { name: 'avoid', correctForm: 'ing' },
  { name: 'enjoy', correctForm: 'ing' },
  { name: 'miss', correctForm: 'ing' },
  { name: 'stop', correctForm: 'ing' },
  { name: 'can\'t stand', correctForm: 'ing' },
  { name: 'finish', correctForm: 'ing' },
  { name: 'practise', correctForm: 'ing' },
  { name: 'suggest', correctForm: 'ing' },
  { name: 'consider', correctForm: 'ing' },
  { name: '(don\'t) mind', correctForm: 'ing' },
  { name: 'recommend', correctForm: 'ing' },
  
  // to verbs
  { name: 'afford', correctForm: 'to' },
  { name: 'expect', correctForm: 'to' },
  { name: 'intend', correctForm: 'to' },
  { name: 'promise', correctForm: 'to' },
  { name: 'agree', correctForm: 'to' },
  { name: 'fail', correctForm: 'to' },
  { name: 'learn (how)', correctForm: 'to' },
  { name: 'refuse', correctForm: 'to' },
  { name: 'arrange', correctForm: 'to' },
  { name: 'forget', correctForm: 'to' },
  { name: 'want', correctForm: 'to' },
  { name: 'decide', correctForm: 'to' },
  { name: 'hope', correctForm: 'to' },
  { name: 'plan', correctForm: 'to' },
  { name: 'would like', correctForm: 'to' },
];
