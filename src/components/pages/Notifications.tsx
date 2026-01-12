import { Bell, TrendingUp, AlertCircle, CheckCircle, Clock, X } from 'lucide-react';
import { useState } from 'react';
import { AppContainer } from '../layout/AppContainer';

interface Notification {
  id: number;
  type: 'market' | 'alert' | 'success';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  isShort: boolean;
}

const allNotifications: Notification[] = [
  {
    id: 1,
    type: 'market',
    title: 'Price Alert',
    description: 'Bitcoin market reached 70% probability. Your watchlist item has moved significantly.',
    timestamp: '5m ago',
    read: false,
    isShort: true,
  },
  {
    id: 2,
    type: 'alert',
    title: 'Market Update',
    description: 'Fed rate decision market volatility increased by 15%. This is a major movement in your portfolio.',
    timestamp: '1h ago',
    read: false,
    isShort: false,
  },
  {
    id: 3,
    type: 'success',
    title: 'Trade Executed',
    description: 'Your position on ChatGPT-5 release was successfully filled at 78¢',
    timestamp: '3h ago',
    read: true,
    isShort: true,
  },
  {
    id: 4,
    type: 'market',
    title: 'New Market',
    description: 'Apple AR Glasses 2026 market is now live. Based on your interests, this might be relevant.',
    timestamp: '5h ago',
    read: true,
    isShort: false,
  },
  {
    id: 5,
    type: 'alert',
    title: 'Watchlist Alert',
    description: 'Tesla stock prediction moved 5% in the last hour',
    timestamp: '1d ago',
    read: true,
    isShort: true,
  },
  {
    id: 6,
    type: 'success',
    title: 'Market Resolved',
    description: 'Your position on Q1 Earnings has been resolved. You earned $124.50 profit.',
    timestamp: '2d ago',
    read: true,
    isShort: true,
  },
  {
    id: 7,
    type: 'market',
    title: 'Trending Market',
    description: 'SpaceX Mars landing is trending with 45% probability increase in 24 hours',
    timestamp: '3d ago',
    read: true,
    isShort: false,
  },
];

export function NotificationsPage() {
  const [notifications, setNotifications] = useState(allNotifications);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleNotificationClick = (notification: Notification) => {
    // Mark as read
    setNotifications(notifications.map(n => 
      n.id === notification.id ? { ...n, read: true } : n
    ));

    // Show modal for actionable or long notifications
    if (!notification.isShort) {
      setSelectedNotification(notification);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'market':
        return <TrendingUp className="h-5 w-5 text-blue-400" />;
      case 'alert':
        return <AlertCircle className="h-5 w-5 text-orange-400" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      default:
        return <Bell className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <AppContainer>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Bell className="h-7 w-7 text-blue-400" />
            <h1 className="text-3xl font-semibold">Notifications</h1>
          </div>
          {unreadCount > 0 && (
            <p className="text-muted-foreground">
              You have {unreadCount} unread {unreadCount === 1 ? 'notification' : 'notifications'}
            </p>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Mark all read
          </button>
        )}
      </div>

      {/* Notifications List */}
      <div className="space-y-2">
        {notifications.map((notification) => (
          <button
            key={notification.id}
            onClick={() => handleNotificationClick(notification)}
            className={`w-full p-4 bg-card border border-border/40 rounded-lg hover:border-blue-500/50 transition-all text-left ${
              !notification.read ? 'bg-blue-500/5 border-blue-500/30' : ''
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-medium">
                    {notification.title}
                  </p>
                  {!notification.read && (
                    <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-1.5" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {notification.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {notification.timestamp}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Empty State */}
      {notifications.length === 0 && (
        <div className="py-16 text-center">
          <Bell className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No notifications yet</h3>
          <p className="text-muted-foreground">
            You're all caught up! Check back later for updates.
          </p>
        </div>
      )}
    </AppContainer>
  );
}