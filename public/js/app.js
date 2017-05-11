data.forEach((item) => {
  document.getElementById('root').innerHTML +=
    `
      <div class="docs__header">
        ${item.header}
      </div>

      <div class="docs__item">
        <div class="docs__item__request">
            <div class="docs__item__request-verb">
              ${item.request.verb}
            </div>
            <div class="u-m-l">
              <span class="highlight">/</span>&nbsp;${item.request.route}
            </div>
          </div>
          <div class="docs__item__content">
            
            <div class="u-p-t-b">
              <div class="docs__item__content-requestBody__title">
                Request Body
              </div>
              <div class="docs__item__content-requestBody__contentType">
                Content Type: <span class="highlight">${item.requestBody.contentType}</span>
              </div>
<pre class="docs__item__content-requestBody__body snippet">
  <code>${item.requestBody.snippet}</code>
</pre>
            </div>

            <div class="u-p-t-b">
              <div class="docs__item__content-responses__title">
                Response
              </div>
              <div class="docs__item__content-responses__contentType">
                Content Type: <span class="highlight">${item.response.contentType}</span>
              </div>
<pre class="docs__item__content-responses__body snippet">
  <code>${item.response.snippet}</code>
</pre>
            </div>
          </div>
      </div>
    `;
});
