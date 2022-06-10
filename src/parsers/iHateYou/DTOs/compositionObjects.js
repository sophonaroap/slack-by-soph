/*
{
    "text": {
        "type": "plain_text",
        "text": "Maru"
    },
    "value": "maru"
}
 */
export class Option {
  constructor(compositionDict) {
    this.text = compositionDict.text.text;
    this.value = compositionDict.value;
    this.description = compositionDict.description.text;
    this.url = compositionDict.url;
  }
}

/*
"option_groups": [
  {
    "label": {
      "type": "plain_text",
      "text": "Group 1"
    },
    "options": [
      {
        "text": {
            "type": "plain_text",
            "text": "*this is plain_text text*"
        },
        "value": "value-0"
      },
      {
        "text": {
            "type": "plain_text",
            "text": "*this is plain_text text*"
        },
        "value": "value-1"
      },
      {
        "text": {
            "type": "plain_text",
            "text": "*this is plain_text text*"
        },
        "value": "value-2"
      }
    ]
  },
  {
    "label": {
        "type": "plain_text",
        "text": "Group 2"
    },
    "options": [
      {
        "text": {
            "type": "plain_text",
            "text": "*this is plain_text text*"
        },
        "value": "value-3"
      }
    ]
  }
]
 */
export class OptionGroup {
  constructor(compositionDict) {
    this.label = compositionDict.label.text;
    this.options = compositionDict.options;
  }
}

/*
{
  "title": {
      "type": "plain_text",
      "text": "Are you sure?"
  },
  "text": {
      "type": "mrkdwn",
      "text": "Wouldn't you prefer a good game of _chess_?"
  },
  "confirm": {
      "type": "plain_text",
      "text": "Do it"
  },
  "deny": {
      "type": "plain_text",
      "text": "Stop, I've changed my mind!"
  }
}
 */
export class ConfirmationDialog {
  constructor(compositionDict) {
    this.title = compositionDict.title.text;
    this.text = compositionDict.text.text;
    this.confirm = compositionDict['confirm'].text;
    this.deny = compositionDict.deny.text;
    this.style = compositionDict.style;
  }
}