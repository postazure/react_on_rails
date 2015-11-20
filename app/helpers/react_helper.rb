module ReactHelper
  def render_component(component, props = {}, options = {tag_name: 'span'})
    javascript_include_tag "components/hello_world"
    node = "document.getElementById('react-#{component}')"

    "
      <#{options[:tag_name]} id='react-#{component}'/>
      <script>
        window.#{component}({props: #{props.to_json}, node:#{node}})
      </script>
    ".html_safe
  end
end