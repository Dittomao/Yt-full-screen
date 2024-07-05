document.addEventListener('DOMContentLoaded', function() {
        const embedButton = document.getElementById('embedButton');
            embedButton.addEventListener('click', embedVideo);
            });

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
                                                                                                                                                                        const videoContainer = document.getElementById('videoContainer');
                                                                                                                                                                                    videoContainer.appendChild(iframe);
                                                                                                                                                                                            }
                                                                                                                                                                                                    
                                                                                                                                                                                                            // Set iframe attributes
                                                                                                                                                                                                                    iframe.setAttribute('src', embedUrl);
                                                                                                                                                                                                                            iframe.setAttribute('width', '100%');
                                                                                                                                                                                                                                    iframe.setAttribute('height', '400');
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                        // Handle invalid URL
                                                                                                                                                                                                                                                                alert('Invalid YouTube URL. Please enter a valid YouTube video URL.');
                                                                                                                                                                                                                                                                        console.error('Invalid YouTube URL:', inputUrl);
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                            function extractVideoId(url) {
                                                                                                                                                                                                                                                                                // Regular expression to extract video ID from YouTube URL
                                                                                                                                                                                                                                                                                    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
                                                                                                                                                                                                                                                                                        const match = url.match(regExp);
                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                if (match && match[2].length === 11) {
                                                                                                                                                                                                                                                                                                        return match[2];
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                    return null;
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                        }

