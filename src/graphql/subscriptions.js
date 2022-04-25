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
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePresentation = /* GraphQL */ `
  subscription OnUpdatePresentation {
    onUpdatePresentation {
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
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePresentation = /* GraphQL */ `
  subscription OnDeletePresentation {
    onDeletePresentation {
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
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      title
      attendees {
        items {
          userId
          name
          email
          id
          createdAt
          updatedAt
          eventAttendeesId
        }
        nextToken
      }
      activeQuestion {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      answers {
        items {
          questionText
          attendeeIdentifier
          choiceText
          id
          createdAt
          updatedAt
          eventAnswersId
          answerQuestionId
          answerAttendeeId
          answerChoiceId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      eventActiveQuestionId
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      title
      attendees {
        items {
          userId
          name
          email
          id
          createdAt
          updatedAt
          eventAttendeesId
        }
        nextToken
      }
      activeQuestion {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      answers {
        items {
          questionText
          attendeeIdentifier
          choiceText
          id
          createdAt
          updatedAt
          eventAnswersId
          answerQuestionId
          answerAttendeeId
          answerChoiceId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      eventActiveQuestionId
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      title
      attendees {
        items {
          userId
          name
          email
          id
          createdAt
          updatedAt
          eventAttendeesId
        }
        nextToken
      }
      activeQuestion {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      answers {
        items {
          questionText
          attendeeIdentifier
          choiceText
          id
          createdAt
          updatedAt
          eventAnswersId
          answerQuestionId
          answerAttendeeId
          answerChoiceId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      eventActiveQuestionId
    }
  }
`;
export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee {
    onCreateAttendee {
      userId
      name
      email
      id
      createdAt
      updatedAt
      eventAttendeesId
    }
  }
`;
export const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee {
    onUpdateAttendee {
      userId
      name
      email
      id
      createdAt
      updatedAt
      eventAttendeesId
    }
  }
`;
export const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee {
    onDeleteAttendee {
      userId
      name
      email
      id
      createdAt
      updatedAt
      eventAttendeesId
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      question {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      questionText
      attendee {
        userId
        name
        email
        id
        createdAt
        updatedAt
        eventAttendeesId
      }
      attendeeIdentifier
      choice {
        content
        id
        createdAt
        updatedAt
        questionChoicesId
      }
      choiceText
      id
      createdAt
      updatedAt
      eventAnswersId
      answerQuestionId
      answerAttendeeId
      answerChoiceId
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      question {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      questionText
      attendee {
        userId
        name
        email
        id
        createdAt
        updatedAt
        eventAttendeesId
      }
      attendeeIdentifier
      choice {
        content
        id
        createdAt
        updatedAt
        questionChoicesId
      }
      choiceText
      id
      createdAt
      updatedAt
      eventAnswersId
      answerQuestionId
      answerAttendeeId
      answerChoiceId
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      question {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      questionText
      attendee {
        userId
        name
        email
        id
        createdAt
        updatedAt
        eventAttendeesId
      }
      attendeeIdentifier
      choice {
        content
        id
        createdAt
        updatedAt
        questionChoicesId
      }
      choiceText
      id
      createdAt
      updatedAt
      eventAnswersId
      answerQuestionId
      answerAttendeeId
      answerChoiceId
    }
  }
`;
