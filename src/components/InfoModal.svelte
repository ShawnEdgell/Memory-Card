<!-- InfoModal.svelte -->

<script>
    let isOpen = false;
  
    function openModal() {
      isOpen = true;
    }
  
    function closeModal() {
      isOpen = false;
    }
  </script>
  
  <div
    class="info-icon"
    role="button"
    tabindex="0"
    on:click={openModal}
    on:keydown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        openModal();
      }
    }}
  >
    <!-- Update the src attribute to import the image -->
<img src={import.meta.env.BASE_URL + 'info.svg'} alt="Info Icon" />


  </div>
  
  {#if isOpen}
    <div class="modal">
      <div class="modal-content">
        <!-- Add your game instructions and information here -->
        <h2>How to Play</h2>
        <p>Instructions go here...</p>
        <button on:click={closeModal}>Close</button>
      </div>
    </div>
  {/if}
  
  <style>
    /* Styles for the InfoModal component go here */
    .info-icon {
      cursor: pointer;
      color: #0077cc;
      font-family: sans-serif;
      font-size: 20px;
      position: fixed;
      left: 10px;
      margin-top: 8px;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }
  
    .modal-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
  
    .modal h2 {
      margin-bottom: 10px;
    }
  
    .modal button {
      padding: 8px 16px;
      background-color: #0077cc;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .modal button:hover {
      background-color: #005599;
    }

    img {
        width: 32px;
    }
    
  </style>
  