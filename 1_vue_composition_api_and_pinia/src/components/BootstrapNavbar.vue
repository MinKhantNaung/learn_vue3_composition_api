<template>
    <div>
        <!-- bootstrap navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <h5 class="navbar-brand">Vue Router</h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link active" aria-current="page">Home(current)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/about" class="nav-link">About</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/posts" class="nav-link">Posts</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- bootstrap navbar -->
    </div>
</template>