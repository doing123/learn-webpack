<div class="layer">
<!--<img src="src/assets/1.jpg" alt=""/>-->
<img src="${require('../../assets/1.jpg') }" />
    <div>this is <%= name %> layer</div>
    <% for(var i =0; i < arr.length; i++){ %>
        <div><%= arr[i] %></div>
    <% } %>
</div>