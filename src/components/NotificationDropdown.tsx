import { Bell, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface Notification {
  id: number;
  type: 'market' | 'alert' | 'success';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: 'market',
    title: 'Price Alert',
    description: 'Bitcoin market reached 70% probability',
    timestamp: '5m ago',
    read: false,
  },
  {
    id: 2,
    type: 'alert',
    title: 'Market Update',
    description: 'Fed rate decision market volatility increased',
    timestamp: '1h ago',
    read: false,
  },
  {
    id: 3,
    type: 'success',
    title: 'Trade Executed',
    description: 'Your position on ChatGPT-5 was filled',
    timestamp: '3h ago',
    read: true,
  },
  {
    id: 4,
    type: 'market',
    title: 'New Market',
    description: 'Apple AR Glasses 2026 market now live',
    timestamp: '5h ago',
    read: true,
  },
  {
    id: 5,
    type: 'alert',
    title: 'Watchlist Alert',
    description: 'Tesla stock prediction moved 5%',
    timestamp: '1d ago',
    read: true,
  },
];

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onViewAll: () => void;
}

export function NotificationDropdown({ isOpen, onClose, onViewAll }: NotificationDropdownProps) {
  if (!isOpen) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'market':
        return <TrendingUp className="h-4 w-4 text-blue-400" />;
      case 'alert':
        return <AlertCircle className="h-4 w-4 text-orange-400" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      default:
        return <Bell className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Dropdown Panel */}
      <div
        className="absolute right-0 top-full mt-2 w-80 max-w-[calc(100vw-2rem)] bg-card border border-border/40 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-180"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/40">
          <h3 className="font-semibold">Notifications</h3>
          <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
            Mark all read
          </button>
        </div>

        {/* Notification List */}
        <div className="max-h-96 overflow-y-auto">
          {mockNotifications.length > 0 ? (
            <div className="divide-y divide-border/20">
              {mockNotifications.map((notification) => (
                <button
                  key={notification.id}
                  className={`w-full p-4 hover:bg-secondary/30 transition-colors text-left ${
                    !notification.read ? 'bg-blue-500/5' : ''
                  }`}
                  onClick={onClose}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-medium line-clamp-1">
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-1" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                        {notification.description}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {notification.timestamp}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No notifications yet</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {mockNotifications.length > 0 && (
          <div className="p-3 border-t border-border/40 text-center">
            <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors" onClick={onViewAll}>
              View all notifications
            </button>
          </div>
        )}
      </div>
    </>
  );
}