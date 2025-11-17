import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Utility to fetch repo image
async function fetchRepoImage(username, repo) {
    const imageUrl = `https://raw.githubusercontent.com/${username}/${repo}/main/preview.png`;
    try {
        const res = await fetch(imageUrl, { method: "HEAD" });
        return res.ok ? imageUrl : null;
    } catch {
        return null;
    }
}

export default function GitProjects() {
    const username = "azhar0i0";
    const navigate = useNavigate();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadRepos() {
            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos`, {
                    headers: { Accept: "application/vnd.github.mercy-preview+json" },
                });
                const data = await res.json();

                // Filter repos by topic
                const filtered = data.filter((repo) => repo.topics?.includes("portfolio-project"));

                const reposWithImages = await Promise.all(
                    filtered.map(async (repo) => {
                        const img = await fetchRepoImage(username, repo.name);
                        return {
                            name: repo.name,
                            desc: repo.description,
                            url: repo.homepage || repo.html_url,
                            image: img,
                        };
                    })
                );

                setRepos(reposWithImages);
            } catch (e) {
                console.error("Error fetching GitHub repos:", e);
            } finally {
                setLoading(false);
            }
        }

        loadRepos();
    }, [username]);

    const filteredRepos = useMemo(
        () => repos.filter((r) => r.name.toLowerCase().includes(search.toLowerCase())),
        [repos, search]
    );

    // Framer Motion variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.5 },
        }),
        hover: { scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(142,144,72,0.4)" },
    };

    return (
        <div className="container py-5">
            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">GitHub Projects</h1>
                <p className="text-muted">Automatically fetched from GitHub — filtered by topic</p>
                <button
                    onClick={() => navigate("/")}
                    className="btn btn-outline-dark mt-3 rounded-pill"
                >
                    ← Back to Home
                </button>
            </div>

            {/* Search Bar */}
            <div className="d-flex justify-content-center mb-5 w-100">
                <div className="position-relative">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="form-control text-dark search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <i className="bi bi-search search-icon"></i>
                </div>
            </div>



            {/* Grid */}
            <div className="row g-4">
                {/* Skeleton loaders */}
                {loading &&
                    Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="col-sm-6 col-lg-4">
                            <div className="pro-skeleton-card">
                                <div className="pro-skeleton-img shimmer"></div>
                                <div className="pro-skeleton-line shimmer"></div>
                                <div className="pro-skeleton-line short shimmer"></div>
                            </div>
                        </div>
                    ))
                }


                {/* =======================================
                        NEW PROFESSIONAL PROJECT CARDS
                ======================================== */}
                {!loading &&
                    filteredRepos.map((repo, i) => (
                        <motion.div
                            key={i}
                            className="col-sm-6 col-lg-4"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div
                                className="pro-card"
                                onClick={() => window.open(repo.url, "_blank")}
                            >
                                <div className="pro-card-img-wrap">
                                    {repo.image ? (
                                        <img src={repo.image} alt={repo.name} className="pro-card-img" />
                                    ) : (
                                        <div className="pro-card-img fallback">No Image</div>
                                    )}

                                    {/* 🔥 shine effect */}
                                    <div className="pro-card-shine"></div>
                                </div>

                                <div className="pro-card-body">
                                    <h4 className="pro-card-title">{repo.name}</h4>
                                    <p className="pro-card-desc">{repo.desc || "No description provided"}</p>

                                    <motion.button whileHover={{ scale: 1.07 }} className="pro-btn">
                                        Visit Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                    ))}

                {!loading && filteredRepos.length === 0 && (
                    <p className="text-center text-muted mt-5">No matching projects found.</p>
                )}
            </div>
        </div>

    );
}
