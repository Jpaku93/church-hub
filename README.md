# Church Hub - Team Management System

A comprehensive team management system designed for churches to manage events, schedules, documents, social media, and team coordination.

## Features

### 🎯 Access & Roles
- **Role-Based Access Control (RBAC)**: Three user roles (Admin, Leader, Member)
- **Dynamic UI**: Interface adapts based on user role
- **Permission Gating**: Actions like "Approve", "Add Event", "Schedule Post" are only visible to non-Members

### 📊 Dashboard
- **Overview Cards**: Upcoming Events, Today's Duties, Pending Approvals, Quick Links
- **Upcoming Events**: List of events scheduled for the next week
- **Today's Duties**: Assigned tasks for the current day
- **Pending Approvals**: Items awaiting review (for Admins/Leaders)
- **Quick Navigation**: Direct links to Calendar, Timetable, Documents, and Social Media

### 📅 Roster & Calendar
- **Monthly Calendar View**: Visual grid showing all events
- **Ministry Color Coding**: Each ministry has a distinct color for easy identification
- **Interactive Calendar**: Click on any day with an event to view its timetable
- **Assignments List**: At-a-glance view of duty allocations
- **Dynamic Timetables**: Different schedules for different event types (Sunday Service, Youth Group, Prayer Meeting)

### ⏰ Timetable
- **Hour-by-Hour Schedule**: Detailed timeline of activities
- **Responsible Parties**: Clear assignment of who handles each activity
- **Event-Specific Schedules**: Different timetables for different event types
- **Edit Capability**: Admins and Leaders can edit timetables

### 📄 Documents
- **Folder Organization**: Documents grouped by event/service
- **Tag System**: Categorize documents (poster, reel, worship, etc.)
- **Approval Workflow**: Approve or request changes on documents
- **Status Tracking**: Track document status (pending, approved, changes requested)

### 👥 Teams & Roles
- **Ministry Management**: View all ministries with leader and member counts
- **Duty Assignment**: Assign duties to team members
- **Availability Confirmation**: Team members can confirm their availability

### 📱 Social Media

#### Planner
- **Schedule Posts**: Create and schedule social media posts
- **Multi-Platform Support**: Instagram, Facebook, YouTube
- **Post Types**: Status, Reel/Short, Image
- **Draft Management**: Save and manage draft posts

#### Accounts
- **Platform Integration**: Link social media accounts
- **Connection Status**: Visual indicators for linked/unlinked accounts
- **Account Management**: Reconnect or link new accounts

#### Analytics
- **Engagement Metrics**: Total engagement, average engagement rate, engagement trends
- **Reach & Awareness**: Total reach, impressions, follower growth, audience demographics
- **Content Performance**: Content mix analysis, optimal posting times, top performing posts
- **Top Performing Tags**: Hashtag performance tracking with usage, reach, and engagement metrics

### 🔔 Notifications
- **Reminders**: Duty reminders, upload deadlines, roster updates
- **Approval Notifications**: Alerts for items requiring approval
- **Unread Indicators**: Visual badges showing unread notifications

### ⚙️ Settings
- Settings panel (placeholder for future implementation)

## Tech Stack

- **Frontend Framework**: React 18.2
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom shadcn/ui-inspired components
- **Icons**: Lucide React
- **Charts**: Recharts
- **Date Handling**: date-fns
- **Utilities**: clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd church-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
church-hub/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx      # Main application layout
│   │   │   └── Sidebar.tsx         # Navigation sidebar
│   │   ├── ui/                     # Reusable UI components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   └── select.tsx
│   │   └── views/                  # Page components
│   │       ├── Dashboard.tsx
│   │       ├── RosterCalendar.tsx
│   │       ├── Timetable.tsx
│   │       ├── Documents.tsx
│   │       ├── TeamsRoles.tsx
│   │       ├── SocialMedia.tsx
│   │       │   └── SocialMedia/
│   │       │       ├── Planner.tsx
│   │       │       ├── Accounts.tsx
│   │       │       └── Analytics.tsx
│   │       ├── Notifications.tsx
│   │       └── Settings.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx         # Authentication & role management
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Role-Based Access Control

The application supports three user roles:

### Admin
- Full access to all features
- Can approve/reject documents and posts
- Can add events, edit timetables
- Can manage teams and assign duties

### Leader
- Similar to Admin but may have some restrictions
- Can approve/reject documents and posts
- Can add events, edit timetables
- Can manage teams and assign duties

### Member
- Read-only access to most features
- Can view calendar, timetable, documents
- Cannot approve, add events, or edit timetables
- Can confirm availability for duties

## Features in Detail

### Calendar Integration
- Click on any day with an event to view its specific timetable
- Different event types show different schedules
- Visual highlighting of selected days
- Easy navigation between calendar and timetable views

### Social Media Analytics
- **Engagement Metrics**: Track likes, comments, shares, saves
- **Reach & Awareness**: Monitor reach, impressions, and follower growth
- **Content Performance**: Analyze which content types perform best
- **Optimal Posting Times**: Identify best times to post for maximum engagement
- **Top Performing Tags**: Track hashtag performance

## Development

### Adding New Features

1. Create components in `src/components/views/`
2. Add routes in `src/components/layout/MainLayout.tsx`
3. Update types in `src/types/index.ts` if needed
4. Follow the existing component structure and styling patterns

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the existing color scheme and design patterns
- Use the custom UI components from `src/components/ui/`
- Maintain responsive design principles

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support, please contact the development team or open an issue in the repository.

---

Built with ❤️ for church communities
