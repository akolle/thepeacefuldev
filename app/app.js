alert("Sovereign Engine Connected!");
// Sovereign App Core Engine
document.addEventListener("DOMContentLoaded", () => {
  const workspace = document.getElementById("workspace");
  const saveStatus = document.getElementById("save-status");
  const statusDot = document.getElementById("status-dot");

  // 1. Initial Load: Pull data from local memory instantly
  const savedData = localStorage.getItem("soveriegn_mvp_intent");
  if (savedData) {
    workspace.value = savedData;
  }

  // 2. The Engine: Listen to inputs and write silently
  workspace.addEventListener("input", (e) => {
    const currentText = e.target.value;

    // Save to hardware storage instantly
    localStorage.setItem("soveriegn_mvp_intent", currentText);

    // Ambient visual feedback (Pulse the UI gently while typing)
    saveStatus.textContent = "Saving...";
    statusDot.className =
      "w-2 h-2 rounded-full bg-[#ff7b54] shadow-[0_0_8px_#ff7b54]";

    // Set a quick bounce back to "Synced" state
    clearTimeout(workspace.saveTimeout);
    workspace.saveTimeout = setTimeout(() => {
      saveStatus.textContent = "Synced to device";
      statusDot.className =
        "w-2 h-2 rounded-full bg-[#86c232] shadow-[0_0_8px_#86c232]";
    }, 400);
  });
});
