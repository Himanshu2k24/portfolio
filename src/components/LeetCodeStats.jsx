import { useState, useEffect } from 'react';
import './LeetCodeStats.css';

const LeetCodeStats = () => {
    const username = 'iamHimanshuTiwary';
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set fallback stats immediately
        setStats({
            totalSolved: 216,
            easySolved: 109,
            mediumSolved: 94,
            hardSolved: 13,
            ranking: 665062
        });
        setLoading(false);
    }, []);

    return (
        <section id="leetcode" className="leetcode-stats">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <svg className="leetcode-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.756-1.649-7.887.537l-4.11 4.391a5.708 5.708 0 0 0-1.197 2.235 5.753 5.753 0 0 0 .117 3.795 6.257 6.257 0 0 0 1.624 2.196l4.277 4.193c2.925 2.817 7.663 2.817 10.588 0l2.396-2.392a1.378 1.378 0 0 0 0-1.955 1.378 1.378 0 0 0-1.951 0z" />
                        </svg>
                        LeetCode Profile
                    </h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        @{username} • Consistent problem-solving journey on LeetCode
                    </p>
                </div>

                <div className="stats-container">
                    {/* Embedded LeetCode Stats Card */}
                    <div className="stats-card-wrapper">
                        <img
                            src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Karma&ext=heatmap`}
                            alt="LeetCode Stats"
                            className="leetcode-stats-card"
                            loading="lazy"
                        />
                    </div>

                    {loading && (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Loading LeetCode stats...</p>
                        </div>
                    )}

                    {stats && !loading && (
                        <div className="quick-stats">
                            <div className="stat-box-mini">
                                <div className="stat-icon-mini">✅</div>
                                <div className="stat-content-mini">
                                    <div className="stat-value-mini">{stats.totalSolved}</div>
                                    <div className="stat-label-mini">Total Solved</div>
                                </div>
                            </div>

                            <div className="stat-box-mini">
                                <div className="stat-icon-mini">📊</div>
                                <div className="stat-content-mini">
                                    <div className="stat-value-mini">#{stats.ranking.toLocaleString()}</div>
                                    <div className="stat-label-mini">Ranking</div>
                                </div>
                            </div>

                            <div className="stat-box-mini easy">
                                <div className="stat-content-mini">
                                    <div className="stat-value-mini">{stats.easySolved}</div>
                                    <div className="stat-label-mini">Easy</div>
                                </div>
                            </div>

                            <div className="stat-box-mini medium">
                                <div className="stat-content-mini">
                                    <div className="stat-value-mini">{stats.mediumSolved}</div>
                                    <div className="stat-label-mini">Medium</div>
                                </div>
                            </div>

                            <div className="stat-box-mini hard">
                                <div className="stat-content-mini">
                                    <div className="stat-value-mini">{stats.hardSolved}</div>
                                    <div className="stat-label-mini">Hard</div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="leetcode-link-section">
                        <a
                            href={`https://leetcode.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-leetcode"
                        >
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.756-1.649-7.887.537l-4.11 4.391a5.708 5.708 0 0 0-1.197 2.235 5.753 5.753 0 0 0 .117 3.795 6.257 6.257 0 0 0 1.624 2.196l4.277 4.193c2.925 2.817 7.663 2.817 10.588 0l2.396-2.392a1.378 1.378 0 0 0 0-1.955 1.378 1.378 0 0 0-1.951 0l-2.396 2.392a4.644 4.644 0 0 1-6.512 0l-4.277-4.193c-.652-.64-.972-1.469-.948-2.263.024-.793.402-1.533 1.066-2.088l4.11-4.391c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831C18.365.787 14.974 1.052 12.842 3.24l-4.11 4.391a5.708 5.708 0 0 0-1.197 2.235 5.753 5.753 0 0 0 .117 3.795 6.257 6.257 0 0 0 1.624 2.196l4.277 4.193c2.925 2.817 7.663 2.817 10.588 0l2.396-2.392a1.378 1.378 0 0 0 0-1.955 1.378 1.378 0 0 0-1.951 0z" />
                            </svg>
                            View Full LeetCode Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeetCodeStats;
