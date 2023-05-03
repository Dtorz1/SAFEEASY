// Singleton
const metaForm = (() => {
  let instance;

  const init = () => {
    // Private methods and variables
    const metaForm = document.querySelector("#meta-form");
    const handleSubmit = (e) => {
      e.preventDefault();
      const metaValue = document.querySelector("#meta").value;
      localStorage.setItem("meta", metaValue);
      window.location.href = "ahorrado.html";
    };

    metaForm.addEventListener("submit", handleSubmit);

    // Public methods and variables
    return {
      // Public methods and variables
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

metaForm.getInstance();
