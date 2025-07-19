const navBar = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.html">
                十點鐘工作室
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">首頁</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="index.html#intro-cta">關於</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#blog">博客</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#collaborations">尋求合作</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#members">成員</a>
                    </li>
                    <li class="nav-item">
                        <div id="google_translate_element"></div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

document.body.insertAdjacentHTML('afterbegin', navBar);
