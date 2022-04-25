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
export const updatePresentation = /* GraphQL */ `
  mutation UpdatePresentation(
    $input: UpdatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    updatePresentation(input: $input, condition: $condition) {
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
export const deletePresentation = /* GraphQL */ `
  mutation DeletePresentation(
    $input: DeletePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    deletePresentation(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createAttendee = /* GraphQL */ `
  mutation CreateAttendee(
    $input: CreateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    createAttendee(input: $input, condition: $condition) {
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
export const updateAttendee = /* GraphQL */ `
  mutation UpdateAttendee(
    $input: UpdateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    updateAttendee(input: $input, condition: $condition) {
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
export const deleteAttendee = /* GraphQL */ `
  mutation DeleteAttendee(
    $input: DeleteAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    deleteAttendee(input: $input, condition: $condition) {
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
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
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
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
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
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
