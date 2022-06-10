/*
{
  "type": "button",
  "text": {
    "type": "plain_text",
    "text": "Click Me"
  },
  "value": "click_me_123",
  "action_id": "button"
}
 */
export class ButtonElement {
  constructor(elementDict) {
    this.type = 'button';
    this.text = elementDict.text.text;
    this.action_id = elementDict.action_id;
    this.url = elementDict.url;
    this.value = elementDict.value;
    this.style = elementDict.style;
    this.confirm = elementDict['confirm'];
    this.accessibility_label = elementDict.accessibility_label;
  }
}

/*
{
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": "My App",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "Check out these charming checkboxes"
			},
			"accessory": {
				"type": "checkboxes",
				"action_id": "this_is_an_action_id",
				"initial_options": [{
					"value": "A1",
					"text": {
						"type": "plain_text",
						"text": "Checkbox 1"
					}
				}],
				"options": [
					{
						"value": "A1",
						"text": {
							"type": "plain_text",
							"text": "Checkbox 1"
						}
					},
					{
						"value": "A2",
						"text": {
							"type": "plain_text",
							"text": "Checkbox 2"
						}
					}
				]
			}
		}
	]
}
 */
export class CheckboxGroupsElement {
  constructor(elementDict) {
    this.type = 'checkboxes';
    this.action_id = elementDict.action_id;
    this.options = elementDict.options;
    this.initial_options = elementDict.initial_options;
    this.confirm = elementDict.confirm;
    this.focus_on_load = elementDict.focus_on_load;
  }
}

/*
{
  "type": "section",
  "block_id": "section1234",
  "text": {
    "type": "mrkdwn",
    "text": "Pick a date for the deadline."
  },
  "accessory": {
    "type": "datepicker",
    "action_id": "datepicker123",
    "initial_date": "1990-04-28",
    "placeholder": {
      "type": "plain_text",
      "text": "Select a date"
    }
  }
}
 */
export class DatePickerElement {
  constructor(elementDict) {
    this.type = 'datepicker';
    this.action_id = elementDict.action_id;
    this.placeholder = elementDict.placeholder.text;
    this.initial_date = elementDict.initial_date;
    this.confirm = elementDict.confirm;
    this.focus_on_load = elementDict.focus_on_load;
  }
}

/*
{
  "type": "image",
  "image_url": "http://placekitten.com/700/500",
  "alt_text": "Multiple cute kittens"
}
 */
export class ImageElement {
  constructor(elementDict) {
    this.type = 'element';
    this.image_url = elementDict.image_url;
    this.alt_text = elementDict.alt_text;
  }
}

/*
[
  {
    "type": "section",
    "block_id": "section678",
    "text": {
      "type": "mrkdwn",
      "text": "Pick items from the list"
    },
    "accessory": {
      "action_id": "text1234",
      "type": "multi_static_select",
      "placeholder": {
        "type": "plain_text",
        "text": "Select items"
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
    }
  }
]
 */
export class StaticMultiSelectMenuElement {
  constructor(elementDict) {
    this.type = 'multi_static_select';
    this.placeholder = elementDict.placeholder.text;
    this.action_id = elementDict.action_id;
    this.options = elementDict.options;
    this.option_groups = elementDict.option_groups;
    this.initial_options = elementDict.initial_options;
    this.confirm = elementDict['confirm'];
    this.max_selected_items = elementDict.max_selected_items;
    this.focus_on_load = elementDict.focus_on_load;
  }
}

export class ExternalDataSourceMultiSelectMenuElement {
  constructor(elementDict) {
    this.type = 'multi_external_select';
    this.placeholder = elementDict.placeholder.text;
    this.action_id = elementDict.action_id;
    this.min_query_length = elementDict.min_query_length;
    this.initial_options = elementDict.initial_options;
    this.confirm = elementDict['confirm'];
    this.max_selected_items = elementDict.max_selected_items;
    this.focus_on_load = elementDict.focus_on_load;
  }
}