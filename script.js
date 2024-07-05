function embedVideo() {
        const inputUrl = document.getElementById('videoUrlInput').value.trim();
            
                // Validate input URL
                    if (!inputUrl) {
                            alert('Please enter a YouTube video URL.');
                                    return;
                                        }
                                            
                                                // Extract video ID from URL
                                                    const videoId = extractVideoId(inputUrl);
                                                        
                                                            if (videoId) {
                                                                    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                                                                            
                                                                                    // Create or update iframe element
                                                                                            let iframe = document.getElementById('youtubeIframe');
                                                                                                    if (!iframe) {
                                                                                                                iframe = document.createElement('iframe');
                                                                                                                            iframe.setAttribute('id', 'youtubeIframe');
                                                                                                                                        iframe.setAttribute('frameborder', '0');
                                                                                                                                                    iframe.setAttribute('allowfullscreen', '');
                                                                                                                                                                iframe.style.width = '100%'; // Set iframe width to 100% of its container
                                                                                                                                                                            iframe.style.height = '100vh'; // Set iframe height to 100% of viewport height
                                                                                                                                                                                        const videoContainer = document.getElementById('videoContainer');
                                                                                                                                                                                                    videoContainer.appendChild(iframe);
                                                                                                                                                                                                            }
                                                                                                                                                                                                                    
                                                                                                                                                                                                                            // Set iframe src attribute
                                                                                                                                                                                                                                    iframe.setAttribute('src', embedUrl);
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                        // Handle invalid URL
                                                                                                                                                                                                                                                                alert('Invalid YouTube URL. Please enter a valid YouTube video URL.');
                                                                                                                                                                                                                                                                        console.error('Invalid YouTube URL:', inputUrl);
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                            }

