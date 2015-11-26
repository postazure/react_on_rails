React On Rails
===================

React on Rails allows you to drop react components into a rails application. Instead of building a separate client and api. This allows you to take advantage of sessions, routing, erb templates and various helper methods. 

This template is set up to allow thorough testing of your react code and rails code.

###Usage, <i>From component to view...</i>

<b>Creating a Component</b>
 - Components live inside a directory of their name `components/hello_world/hello_world.jsx`
 - The component also needs to be included in the manifest list `components/manifest.js`

Important: Components are responsible for their own render code.

```javascript
// /app/components/hello_world/hello_world.jsx

window.hello_world = function (render_info) {
  ReactDOM.render(<HelloWorld text={render_info.props.text} />, render_info.node)
};
```

<b>Include in View</b> - `render_component`

><b>component</b> - String, name of component
><b>props</b> - Hash, Same structure as expected by react component
><b>options</b> - 
>>  <b>tag_name</b> - String, DOM element that wraps component

```ruby
# /app/helpers/react_helper.rb

def render_component(component, props = {}, options = {tag_name: 'span'})
    javascript_include_tag "components/#{component}"
    node = "document.getElementById('react-#{component}')"

    "
      <#{options[:tag_name]} id='react-#{component}'/>
      <script>
        window.#{component}({props: #{props.to_json}, node:#{node}})
      </script>
    ".html_safe
  end
```

```ruby
# /app/views/welcome/index.html.erb

<%= render_component 'hello_world', text: @text %>
```

```ruby 
# /app/controllers/welcome_controller.rb

class WelcomeController < ApplicationController
  def index
    @text = 'World'
  end
end
```