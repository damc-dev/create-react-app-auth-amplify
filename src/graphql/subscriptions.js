/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChoice = /* GraphQL */ `
  subscription OnCreateChoice {
    onCreateChoice {
      content
      id
      createdAt
      updatedAt
      questionChoicesId
    }
  }
`;
export const onUpdateChoice = /* GraphQL */ `
  subscription OnUpdateChoice {
    onUpdateChoice {
      content
      id
      createdAt
      updatedAt
      questionChoicesId
    }
  }
`;
export const onDeleteChoice = /* GraphQL */ `
  subscription OnDeleteChoice {
    onDeleteChoice {
      content
      id
      createdAt
      updatedAt
      questionChoicesId
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreatePresentation = /* GraphQL */ `
  subscription OnCreatePresentation {
    onCreatePresentation {
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
export const onUpdatePresentation = /* GraphQL */ `
  subscription OnUpdatePresentation {
    onUpdatePresentation {
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
export const onDeletePresentation = /* GraphQL */ `
  subscription OnDeletePresentation {
    onDeletePresentation {
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
