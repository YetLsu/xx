#import <UIKit/UIKit.h>
@interface AppDelegate : UIResponder <UIApplicationDelegate>
@property (nonatomic, strong) UIWindow *window;

- (void)sp_upload:(NSString *)mediaInfo;

- (void)sp_getUserName:(NSString *)isLogin;

- (void)sp_getMediaData:(NSString *)string;


@end
