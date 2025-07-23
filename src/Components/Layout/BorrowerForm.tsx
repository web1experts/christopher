// src/components/Layout.jsx
import './layoutStyle.css'

function BorrowerInformation() {

  return (
    <>
      <h1 className="text-2xl font-semibold">Business General Questionaire</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <iframe
          title="JotForm"
          src="https://form.jotform.com/251422751672455"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default BorrowerInformation