// let localStream; // This is the data stream for audio/video from your device
// let remoteStream; // This is the data stream for audio/video from the device you are communicating with
// let peerConnection; // connect to another user

// const servers = {
//   iceServers: [
//     {
// urls: [ 'stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302' ] // public stun servers
//     }
//   ]
// }

// let init = async () => {
// This asks the browser for permission to access video and audio
//   localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
//   document.getElementById('id').srcObject = localStream;
// }

// let createOffer = async() => {
// peerConnection = new RTCPeerConnection();
// remoteStream = new MediaStream();

// document.getElementById('id').srcObject = remoteStream;

// localStream.getTracks().forEach(track => {
//   peerConnection.addTrack(track, localStream)
// }) // function for updating local track

// peerConnection.ontrack = event => {
//   event.streams[ 0 ].getTracks().forEach(track => {
//     remoteStream.addTrack(track)
//   })
// } // function for getting remote stream track data

// peerConnection.onicecandidate = async event => {
//   if (event.candidate) {
//     console.log("New ICE Candidate:", event.candidate)
//   }
// } // shows wwhen new ICE connects

  // let offer = await peerConnection.createOffer();  // every peerConnection will have offer and answer

  // await peerConnection.setLocalDescription(offer); // when localdescription is set, will trigger onicecandidate

// }
