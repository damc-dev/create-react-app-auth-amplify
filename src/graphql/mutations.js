/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChoice = /* GraphQL */ `
  mutation CreateChoice(
    $input: CreateChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    createChoice(input: $input, condition: $condition) {
      content
      id
      createdAt
      updatedAt
      questionChoicesId
    }
  }
`;
export const updateChoice = /* GraphQL */ `
  mutation UpdateChoice(
    $input: UpdateChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    updateChoice(input: $input, condition: $condition) {
      content
      id
      createdAt
      updatedAt
      questionChoicesId
    }
  }
`;
export const deleteChoice = /* GraphQL */ `
  mutation DeleteChoice(
    $input: DeleteChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    deleteChoice(input: $input, condition: $condition) {
      content
      id
      createdAt
      updatedAt
      questionChoicesId
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      content
      choices {
        items {
          content
          id
          createdAt
          updatedAt
          questionChoicesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      presentationQuestionsId
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      content
      choices {
        items {
          content
          id
          createdAt
          updatedAt
          questionChoicesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      presentationQuestionsId
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      content
      choices {
        items {
          content
          id
          createdAt
          updatedAt
          questionChoicesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      presentationQuestionsId
    }
  }
`;
export const createPresentation = /* GraphQL */ `
  mutation CreatePresentation(
    $input: CreatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    createPresentation(input: $input, condition: $condition) {
      id
      title
      description
      owner
      timestamp
      questions {
        items {
          content
          id
          createdAt
          updatedAt
          presentationQuestionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePresentation = /* GraphQL */ `
  mutation UpdatePresentation(
    $input: UpdatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    updatePresentation(input: $input, condition: $condition) {
      id
      title
      description
      owner
      timestamp
      questions {
        items {
          content
          id
          createdAt
          updatedAt
          presentationQuestionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePresentation = /* GraphQL */ `
  mutation DeletePresentation(
    $input: DeletePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    deletePresentation(input: $input, condition: $condition) {
      id
      title
      description
      owner
      timestamp
      questions {
        items {
          content
          id
          createdAt
          updatedAt
          presentationQuestionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
