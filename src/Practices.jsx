export const Practices = () => {
    return (
        <div>
            <h1>Interview</h1>
            <h1>Profile Card</h1>

            <ProfileCard
                name="Preeti"
                age={18}
                greeting={
                    <div>
                        <strong>Hello Preeti, welcome aboard!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Painting</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Rishant"
                age={21}
                greeting={
                    <div>
                        <strong>Hello Rishant, keep up the great work!</strong>
                    </div>
                }
            >
                <p>Hobbies: Gaming, Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
};

function ProfileCard({ name, age, greeting, children }) {
    return (
        <div className="profile-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <div>{greeting}</div>
            <div>{children}</div>
        </div>
    );
} 